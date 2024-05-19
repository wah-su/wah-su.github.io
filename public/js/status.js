const serviceUp = {
  icon: document.getElementById("status-up-icon"),
  text: document.getElementById("status-up-text"),
};
const serviceDegraded = {
  icon: document.getElementById("status-degraded-icon"),
  text: document.getElementById("status-degraded-text"),
};
const serviceDown = {
  icon: document.getElementById("status-down-icon"),
  text: document.getElementById("status-down-text"),
};

async function getServicesHealth() {
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

  let status = "up";
  const count = lastHeartbeats.reduce((partialSum, a) => partialSum + a, 0);

  if (count === lastHeartbeats.length) {
    status = "up";
  } else if (count === 0) {
    status = "down";
  } else {
    status = "degraded";
  }

  if (status === "up") {
    serviceUp.icon.classList.remove("hidden");
    serviceUp.text.classList.remove("hidden");
    serviceDegraded.icon.classList.add("hidden");
    serviceDegraded.text.classList.add("hidden");
    serviceDown.icon.classList.add("hidden");
    serviceDown.text.classList.add("hidden");
  } else if (status === "degraded") {
    serviceUp.icon.classList.add("hidden");
    serviceUp.text.classList.add("hidden");
    serviceDegraded.icon.classList.remove("hidden");
    serviceDegraded.text.classList.remove("hidden");
    serviceDown.icon.classList.add("hidden");
    serviceDown.text.classList.add("hidden");
  } else if (status === "down") {
    serviceUp.icon.classList.add("hidden");
    serviceUp.text.classList.add("hidden");
    serviceDegraded.icon.classList.add("hidden");
    serviceDegraded.text.classList.add("hidden");
    serviceDown.icon.classList.remove("hidden");
    serviceDown.text.classList.remove("hidden");
  }
}

getServicesHealth();

setInterval(getServicesHealth, 600000);
