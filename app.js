let card = document.getElementById("card");
        let leftBtn = document.getElementById("leftBtn");
        let rightBtn = document.getElementById("rightBtn");

        let rotateY = 0;
        let rotating = false;
        let interval;

        function startRotation(direction) {
            if (rotating) return;
            rotating = true;
            interval = setInterval(() => {
                rotateY += direction;
                card.style.transform = `rotateY(${rotateY}deg)`;
            }, 50);
        }

        function stopRotation() {
            clearInterval(interval);
            rotating = false;
        }

        leftBtn.addEventListener("mousedown", () => startRotation(-5));
        rightBtn.addEventListener("mousedown", () => startRotation(5));
        leftBtn.addEventListener("mouseup", stopRotation);
        rightBtn.addEventListener("mouseup", stopRotation);
        leftBtn.addEventListener("mouseleave", stopRotation);
        rightBtn.addEventListener("mouseleave", stopRotation);