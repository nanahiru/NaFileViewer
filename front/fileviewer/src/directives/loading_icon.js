import { createApp } from 'vue'

const loadingDirective = {
    mounted(el, binding) {
        const isLoading = binding.value

        // 创建加载动画元素
        const spinner = document.createElement('div')
        spinner.className = 'loading-spinner'
        spinner.innerHTML = `
      <div class="spinner"></div>
    `

        // 创建容器
        const loadingContainer = document.createElement('div')
        loadingContainer.className = 'loading-container'
        loadingContainer.appendChild(spinner)

        // 设置样式
        const style = document.createElement('style')
        style.textContent = `
      .loading-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 9999;
      }
      .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `

        // 保存到元素上以便后续访问
        el._loadingContainer = loadingContainer
        el._loadingStyle = style

        if (isLoading) {
            el.style.position = 'relative'
            el.appendChild(loadingContainer)
            document.head.appendChild(style)
        }
    },
    updated(el, binding) {
        if (binding.value !== binding.oldValue) {
            if (binding.value) {
                el.style.position = 'relative'
                el.appendChild(el._loadingContainer)
                document.head.appendChild(el._loadingStyle)
            } else {
                if (el.contains(el._loadingContainer)) {
                    el.removeChild(el._loadingContainer)
                }
                if (document.head.contains(el._loadingStyle)) {
                    document.head.removeChild(el._loadingStyle)
                }
            }
        }
    },
    beforeUnmount(el) {
        // 清理
        if (el.contains(el._loadingContainer)) {
            el.removeChild(el._loadingContainer)
        }
        if (document.head.contains(el._loadingStyle)) {
            document.head.removeChild(el._loadingStyle)
        }
    }
}

export default loadingDirective