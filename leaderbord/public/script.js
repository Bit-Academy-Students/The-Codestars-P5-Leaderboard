const scoreForm         = document.getElementById('score-form');
const targetSelect      = document.getElementById('target');
const pointsInput       = document.getElementById('points');
const message           = document.getElementById('message');
const leaderboardHeader = document.getElementById('leaderboard-header');
const leaderboardBody   = document.getElementById('leaderboard-body');
const modeRadios        = document.querySelectorAll('input[name="mode"]');

const MOCK_COACH_ID = 1;
let mode = 'teams';

const CONFIG = {
  teams: {
    targetsUrl: '/api/teams',
    leaderboardUrl: '/api/leaderboard/teams',
    headerHtml: `
      <th>Position</th>
      <th>Team</th>
      <th>Location</th>
      <th>Total Points</th>
    `,
    optionPrefix: 'team',
    label: item => `${item.name} (${item.location_name})`,
    nameKey: 'team_name',
    extraKey: 'location_name',
  },
  students: {
    targetsUrl: '/api/students',
    leaderboardUrl: '/api/leaderboard/students',
    headerHtml: `
      <th>Position</th>
      <th>Student</th>
      <th>Team</th>
      <th>Total Points</th>
    `,
    optionPrefix: 'student',
    label: item => `${item.name} (${item.team_name})`,
    nameKey: 'student_name',
    extraKey: 'team_name',
  }
};

const cfg = () => CONFIG[mode];

modeRadios.forEach(r =>
  r.addEventListener('change', () => {
    mode = r.value;
    loadTargets();
    loadLeaderboard();
  })
);

async function loadTargets() {
  const { targetsUrl, optionPrefix, label } = cfg();
  try {
    const res = await fetch(targetsUrl);
    const data = await res.json();

    targetSelect.innerHTML = data
      .map(item =>
        `<option value="${optionPrefix}-${item.id}">${label(item)}</option>`
      )
      .join('');
  } catch (err) {
    console.error(err);
    message.style.color = 'red';
    message.textContent = 'Could not load ';
  }
}

async function loadLeaderboard() {
  const { leaderboardUrl, headerHtml, nameKey, extraKey } = cfg();
  try {
    const res = await fetch(leaderboardUrl);
    const data = await res.json();

    leaderboardHeader.innerHTML = headerHtml;
    leaderboardBody.innerHTML = data
        .map((row, i) => `
            <tr>
            <td>${i + 1}</td>
            <td>${row[nameKey]}</td>
            <td>${row[extraKey]}</td>
            <td>${row.total_points}</td>
            </tr>
        `)
        .join('');
    } catch (err) {
        console.error(err);
        message.style.color = 'red';
        message.textContent = 'Could not load';
    }
    }

    scoreForm.addEventListener('submit', async e => {
    e.preventDefault();
    message.textContent = '';

    if (!targetSelect.value) {
        message.style.color = 'red';
        message.textContent = 'Please select a team or student.';
        return;
    }

    const [type, idStr] = targetSelect.value.split('-');
    const id     = Number(idStr);
    const points = Number(pointsInput.value);

    if (!points || points <= 0) {
        message.style.color = 'red';
        message.textContent = 'Voer een getal in';
        return;
    }

    const body = {
        coachId: MOCK_COACH_ID,
        eventId: 1,
        points,
        ...(type === 'team' ? { teamId: id } : { studentId: id }),
    };

    try {
        const res  = await fetch('/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        });
        const data = await res.json();

        if (!res.ok) {
        message.style.color = 'red';
        message.textContent = data.error || 'Error adding points';
        return;
        }

        message.style.color = 'green';
        message.textContent = 'Points added!';
        pointsInput.value = '';
        await loadLeaderboard();
    } catch (err) {
        console.error(err);ÍÍÍ
        message.style.color = 'red';
        message.textContent = 'Something went wrong.';
    }
    });

    (async () => {
    await loadTargets();
    await loadLeaderboard();
    })();
