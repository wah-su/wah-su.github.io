let statusIcon = null;
let statusIconPing = null;
let statusText = null;

const serviceUp = {
  color: "#05df72",
  text: "All Services Operational",
};
const serviceDegraded = {
  color: "#fcc800",
  text: "Degraded Services",
};
const serviceDown = {
  color: "#c10007",
  text: "All Services Down",
};
const serviceUnknown = {
  color: "#6a7282",
  text: "Unknown",
};

async function getServicesHealth() {
  try {
    const serviceStatus = await fetch(
      "https://status.wah.su/api/status-page/heartbeat/services"
    );

    const services = await serviceStatus.json();
    const heartbeatDict = services.heartbeatList;
    let lastHeartbeats = [];

    for (const [key, value] of Object.entries(heartbeatDict)) {
      lastHeartbeats.push(
        heartbeatDict[key][heartbeatDict[key].length - 1].status
      );
    }
    const count = lastHeartbeats.reduce((partialSum, a) => partialSum + a, 0);

    switch (count) {
      case lastHeartbeats.length: {
        statusIcon.style.setProperty("--ping-color", serviceUp.color);
        statusIconPing.classList.remove("invisible");
        statusText.textContent = serviceUp.text;
        break;
      }
      case 0: {
        statusIcon.style.setProperty("--ping-color", serviceDown.color);
        statusIconPing.classList.add("invisible");
        statusText.textContent = serviceDown.text;
        break;
      }
      default: {
        statusIcon.style.setProperty("--ping-color", serviceDegraded.color);
        statusIconPing.classList.remove("invisible");
        statusText.textContent = serviceDegraded.text;
        break;
      }
    }
  } catch (error) {
    statusIcon.style.setProperty("--ping-color", serviceUnknown.color);
    statusIconPing.classList.add("invisible");
    statusText.textContent = serviceUnknown.text;
    console.log("Failed to fetch services status: " + error);
    return;
  }
}

window.onload = () => {
  const footer = document.getElementById("footer");
  const mobileFooter = document.getElementById("mobile-footer");

  if (footer.checkVisibility() == true) {
    statusIcon = footer.querySelector("#status-icon");
    statusIconPing = footer.querySelector("#status-icon-ping");
    statusText = footer.querySelector("#status-text");
  } else {
    statusIcon = mobileFooter.querySelector("#status-icon");
    statusIconPing = mobileFooter.querySelector("#status-icon-ping");
    statusText = mobileFooter.querySelector("#status-text");
  }

  getServicesHealth();
  setInterval(getServicesHealth, 600000);
};
