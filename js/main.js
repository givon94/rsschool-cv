const skills = () => {
    const skill = document.querySelectorAll('.progress')
    skill.forEach((item, index) => {
        const progress = item.getAttribute('data-percent');
        item.style.width = progress
    })
}

document.addEventListener('DOMContentLoaded', skills);