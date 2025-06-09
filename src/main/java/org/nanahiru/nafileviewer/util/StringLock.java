package org.nanahiru.nafileviewer.util;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

/**
 * 基于字符串的互斥锁工具类（不可重入，支持超时等待）
 */
public final class StringLock {

    private static final ConcurrentHashMap<String, LockWrapper> lockMap = new ConcurrentHashMap<>();

    /**
     * 获取锁（阻塞，直到获取成功）
     */
    public static void lock(String key) {
        LockWrapper wrapper = lockMap.computeIfAbsent(key, k -> new LockWrapper());
        wrapper.lock();
    }

    /**
     * 尝试获取锁（非阻塞，立即返回）
     * @return true 获取成功，false 获取失败
     */
    public static boolean tryLock(String key) {
        LockWrapper wrapper = lockMap.computeIfAbsent(key, k -> new LockWrapper());
        return wrapper.tryLock();
    }

    /**
     * 尝试获取锁（带超时等待）
     * @param key 锁的键
     * @param timeout 超时时间
     * @param unit 时间单位
     * @return true 获取成功，false 超时未获取到锁
     * @throws InterruptedException 如果线程在等待时被中断
     */
    public static boolean tryLock(String key, long timeout, TimeUnit unit) throws InterruptedException {
        LockWrapper wrapper = lockMap.computeIfAbsent(key, k -> new LockWrapper());
        return wrapper.tryLock(timeout, unit);
    }

    /**
     * 释放锁
     */
    public static void unlock(String key) {
        LockWrapper wrapper = lockMap.get(key);
        if (wrapper == null) {
            throw new IllegalStateException("No lock found for key: " + key);
        }
        wrapper.unlock();
        // 如果没有线程持有锁，则移除该锁（避免内存泄漏）
        if (wrapper.isFree()) {
            lockMap.remove(key, wrapper);
        }
    }

    /**
     * 锁包装类（内部使用ReentrantLock，但限制不可重入）
     */
    private static class LockWrapper {
        private final ReentrantLock lock = new ReentrantLock();
        private volatile Thread owner;

        public void lock() {
            if (owner == Thread.currentThread()) {
                throw new IllegalStateException("This lock is non-reentrant!");
            }
            lock.lock();
            owner = Thread.currentThread();
        }

        public boolean tryLock() {
            if (owner == Thread.currentThread()) {
                return false;
            }
            boolean acquired = lock.tryLock();
            if (acquired) {
                owner = Thread.currentThread();
            }
            return acquired;
        }

        public boolean tryLock(long timeout, TimeUnit unit) throws InterruptedException {
            if (owner == Thread.currentThread()) {
                return false;
            }
            boolean acquired = lock.tryLock(timeout, unit);
            if (acquired) {
                owner = Thread.currentThread();
            }
            return acquired;
        }

        public void unlock() {
            if (owner != Thread.currentThread()) {
                throw new IllegalStateException("Current thread does not hold the lock!");
            }
            owner = null;
            lock.unlock();
        }

        public boolean isFree() {
            return !lock.isLocked();
        }
    }
}