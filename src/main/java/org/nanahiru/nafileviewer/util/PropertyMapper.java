package org.nanahiru.nafileviewer.util;

import java.lang.reflect.Field;
import java.util.Arrays;

public class PropertyMapper {

    public static <T, S> void mapProperties(T target, S source) throws IllegalAccessException {
        if (target == null || source == null) {
            return;
        }

        Field[] targetFields = getAllFields(target.getClass());
        Field[] sourceFields = getAllFields(source.getClass());

        for (Field targetField : targetFields) {
            for (Field sourceField : sourceFields) {
                if (targetField.getName().equals(sourceField.getName())) {
                    targetField.setAccessible(true);
                    sourceField.setAccessible(true);

                    Object value = sourceField.get(source);
                    if (value != null && isAssignable(targetField.getType(), sourceField.getType())) {
                        targetField.set(target, convertValue(value, targetField.getType()));
                    }
                    break;
                }
            }
        }
    }
    @SafeVarargs
    public static <T, S> void mapProperties(T target, S... sources) throws IllegalAccessException {
        if (target == null || sources == null) {
            return;
        }

        for (S source : sources) {
            if (source != null) {
                mapProperties(target, source);  // 注意参数顺序：target在前，source在后
            }
        }
    }

    private static boolean isAssignable(Class<?> targetType, Class<?> sourceType) {
        // 基本类型和包装类型的兼容性检查
        if (targetType.isPrimitive() || sourceType.isPrimitive()) {
            return (targetType.equals(byte.class) || targetType.equals(Byte.class)) &&
                    (sourceType.equals(byte.class) || sourceType.equals(Byte.class)) ||
                    (targetType.equals(short.class) || targetType.equals(Short.class)) &&
                            (sourceType.equals(short.class) || sourceType.equals(Short.class)) ||
                    (targetType.equals(int.class) || targetType.equals(Integer.class)) &&
                            (sourceType.equals(int.class) || sourceType.equals(Integer.class)) ||
                    (targetType.equals(long.class) || targetType.equals(Long.class)) &&
                            (sourceType.equals(long.class) || sourceType.equals(Long.class)) ||
                    (targetType.equals(float.class) || targetType.equals(Float.class)) &&
                            (sourceType.equals(float.class) || sourceType.equals(Float.class)) ||
                    (targetType.equals(double.class) || targetType.equals(Double.class)) &&
                            (sourceType.equals(double.class) || sourceType.equals(Double.class)) ||
                    (targetType.equals(char.class) || targetType.equals(Character.class)) &&
                            (sourceType.equals(char.class) || sourceType.equals(Character.class)) ||
                    (targetType.equals(boolean.class) || targetType.equals(Boolean.class)) &&
                            (sourceType.equals(boolean.class) || sourceType.equals(Boolean.class));
        }
        return targetType.isAssignableFrom(sourceType);
    }

    private static Object convertValue(Object value, Class<?> targetType) {
        if (value == null) {
            return null;
        }

        Class<?> sourceType = value.getClass();

        if (targetType.isAssignableFrom(sourceType)) {
            return value;
        }

        // 处理基本类型和包装类型的转换
        if (targetType.equals(Integer.class) || targetType.equals(int.class)) {
            if (value instanceof Number) {
                return ((Number) value).intValue();
            }
        } else if (targetType.equals(Long.class) || targetType.equals(long.class)) {
            if (value instanceof Number) {
                return ((Number) value).longValue();
            }
        }
        // 其他类型的转换可以在这里添加

        return value;
    }

    private static Field[] getAllFields(Class<?> clazz) {
        Field[] fields = clazz.getDeclaredFields();
        Class<?> superClass = clazz.getSuperclass();

        while (superClass != null) {
            Field[] superFields = superClass.getDeclaredFields();
            Field[] combinedFields = Arrays.copyOf(fields, fields.length + superFields.length);
            System.arraycopy(superFields, 0, combinedFields, fields.length, superFields.length);
            fields = combinedFields;
            superClass = superClass.getSuperclass();
        }

        return fields;
    }
}