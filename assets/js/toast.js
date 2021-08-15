const dataToasts = {
    success: {
        title: 'Thành công!',
        msg: 'Bạn đã đăng ký tài khoản thành công!',
        type: 'success',
        durations: 1000
    },
    info: {
        title: 'Thông tin',
        msg: 'Đây là thông tin thôi nhé.',
        type: 'info',
        durations: 2000
    },
    error: {
        title: 'Thất bại!',
        msg: 'Đăng ký tài khoản thất bại mất rồi, thử lại nhé!',
        type: 'error',
        durations: 3000
    },
    warning: {
        title: 'Cảnh báo!',
        msg: 'Đây chỉ là một cảnh báo thôi.',
        type: 'warning',
        durations: 4000
    }
}

function toast(data) {
    const main = document.getElementById('toast')
    const icons = {
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-circle',
        error: 'fas fa-exclamation-circle'
    }
    if(main) {
        const toast = document.createElement('div')
        const delay = (data.durations/1000).toFixed(2)
        toast.classList.add('toast', `toast--${data.type}`)
        toast.style.animation = `slideIn ease-in 0.3s, fadeOut ease-in 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icons[data.type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${data.title}</h3>
                <p class="toast__msg">${data.msg}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>`
        main.appendChild(toast)
        const autoRemove = setTimeout(() => {
            main.removeChild(toast)
        }, data.durations + 1000)
        toast.onclick = (e) => {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemove)
            }
        }
    }
}

function showSuccessToast() {
    toast(dataToasts.success)
}
function showInfoToast() {
    toast(dataToasts.info)
}
function showErrorToast() {
    toast(dataToasts.error)
}
function showWarningToast() {
    toast(dataToasts.warning)
}