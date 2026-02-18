let statue;

document.addEventListener('DOMContentLoaded', function() {
  const scene = document.querySelector('a-scene');

  scene.addEventListener('loaded', function() {
    statue = document.querySelector('#statue');

    const buttons = {
      'btn-rotLeft': function() {
        let rotation = statue.getAttribute('rotation');
        statue.setAttribute('rotation', {x: rotation.x, y: rotation.y - 15, z: rotation.z});
      },
      'btn-rotRight': function() {
        let rotation = statue.getAttribute('rotation');
        statue.setAttribute('rotation', {x: rotation.x, y: rotation.y + 15, z: rotation.z});
      },
      'btn-zoomIn': function() {
        let scale = statue.getAttribute('scale');
        statue.setAttribute('scale', {x: scale.x * 1.15, y: scale.y * 1.15, z: scale.z * 1.15});
      },
      'btn-reset': function() {
        statue.setAttribute('position', {x: 0, y: 0.55, z: -4});
        statue.setAttribute('rotation', {x: -90, y: 45, z: 0});
        statue.setAttribute('scale', {x: 0.1, y: 0.1, z: 0.1});
      }
    };

    const hoverColor = '#ffffff';

    for (let btnId in buttons) {
      const btn = document.getElementById(btnId);
      if (btn) {
        const baseColor = btn.getAttribute('color');

        btn.addEventListener('mouseenter', function() {
          this.setAttribute('scale', {x: 1.06, y: 1.06, z: 1.06});
          this.setAttribute('color', hoverColor);
        });

        btn.addEventListener('mouseleave', function() {
          this.setAttribute('scale', {x: 1, y: 1, z: 1});
          this.setAttribute('color', baseColor);
        });

        btn.addEventListener('click', function() {
          console.log('Clicked:', btnId);
          buttons[btnId]();
        });
      }
    }
  });
});
