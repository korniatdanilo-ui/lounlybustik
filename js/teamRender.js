document.addEventListener('DOMContentLoaded', async () => {
    const teamWrapper = document.querySelector('.team-container');
    if (!teamWrapper) {
        return;
    }

    try {
        const response = await fetch('js/teamData.json');
        if (!response.ok) {
            throw new Error('Failed to load team data');
        }

        const text = await response.text();
        const team = JSON.parse(text);

        teamWrapper.innerHTML = team
            .map(
                (member, index) => `
          <div class="team-card" style="animation-delay: ${index * 70}ms;">
            <img src="${member.img}" alt="${member.name}" class="team-card__img" />
            <div class="team-card__content">
              <h5 class="teamSection__itemTitle">${member.name}</h5>
              <p class="teamSection__itemText">${member.role}</p>
              <span class="teamSection__itemSpan">${member.experience}</span>
            </div>
          </div>`
            )
            .join('');
    } catch (error) {
        console.error(error);
    }
});
