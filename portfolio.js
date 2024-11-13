
        function toggleSkills() {
            const skillsList = document.querySelector('.skills-list');
            if (skillsList.style.display === 'none' || skillsList.style.display === '') {
                skillsList.style.display = 'block';
            } else {
                skillsList.style.display = 'none';
            }
        }
