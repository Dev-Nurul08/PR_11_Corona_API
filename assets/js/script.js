let stateInput = document.getElementById("stateInput");
let searchBtn = document.getElementById("searchBtn");

let loader = document.getElementById("loader");
let result = document.getElementById("result");

let cases = document.getElementById("cases");
let recovered = document.getElementById("recovered");
let deaths = document.getElementById("deaths");
let active = document.getElementById("active");

// ✅ Load states dynamically from API
const loadStates = async () => {
    try {
        let res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        let data = (await res.json()).data.regional;

        stateInput.innerHTML = '<option value="">Select State</option>';

        data.forEach(state => {
            let option = document.createElement("option");
            option.value = state.loc;
            option.textContent = state.loc;
            stateInput.appendChild(option);
        });
    } catch (error) {
        console.error(error);
        stateInput.innerHTML = '<option value="">Failed to load states</option>';
    }
};

loadStates();

const fetchCovid = async () => {
    let state = stateInput.value.trim();

    loader.classList.remove("hide");
    result.classList.add("hide");

    if (state === "") {
        alert("Please select a state!");
        loader.classList.add("hide");
        return;
    }

    try {
        let res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        let covidData = (await res.json()).data;

        let stateData = covidData.regional.find(item => item.loc === state);

        if (!stateData) {
            alert("State not found!");
            loader.classList.add("hide");
            return;
        }

        cases.innerHTML = stateData.totalConfirmed;
        recovered.innerHTML = stateData.discharged;
        deaths.innerHTML = stateData.deaths;

        active.innerHTML =
            stateData.totalConfirmed -
            stateData.discharged -
            stateData.deaths;

        result.classList.remove("hide");

    } catch (err) {
        console.error(err);
        alert("Something went wrong!");
    } finally {
        loader.classList.add("hide");
    }
};

searchBtn.addEventListener("click", fetchCovid);
