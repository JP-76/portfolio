// Get the root element
var r = document.querySelector(":root");

// Create a function for getting a variable value
function myFunction_get() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
    alert("The value of --theme is: " + rs.getPropertyValue("--theme"));
}

// Create a function for setting a variable value
function theme_switch() {
    if (r.style.getPropertyValue("--theme") == "light") {
        r.style.setProperty("--theme", "dark");
        r.style.setProperty("--primary-accent", "#2b0057");
        r.style.setProperty("--secondary-accent", "#41087b");
        r.style.setProperty("--tertiary-accent", "#5a0da3");
        r.style.setProperty("--primary-text", "#e9e7e9");
        r.style.setProperty("--secondary-text", "#cbd9e7");
        r.style.setProperty("--primary-background", "#0f0f0f");
        r.style.setProperty("--secondary-background", "#1b1b1b");
        r.style.setProperty("--secondary-background-light", "#2f2f2f");
        r.style.setProperty("--tertiary-background", "#0b0b0b");
        r.style.setProperty("--shadow", "#080808");
        r.style.setProperty("--cube-top", "#262626");
        r.style.setProperty("--cube-left", "#1a1a1a");
        r.style.setProperty("--cube-right", "#0d0d0d");
        r.style.setProperty("--invert-svg-filter", "invert(1)");

        //mudar o icone do tema
        document.getElementById("themeIcon").src = "assets/img/sun.svg";
    } else {
        r.style.setProperty("--theme", "light");
        r.style.setProperty("--primary-accent", "#006bb3");
        r.style.setProperty("--secondary-accent", "#007acc");
        r.style.setProperty("--tertiary-accent", "#33adff");
        r.style.setProperty("--primary-text", "#1b181b");
        r.style.setProperty("--secondary-text", "#080d11");
        r.style.setProperty("--primary-background", "#fafafa");
        r.style.setProperty("--secondary-background", "#d9d9d9");
        r.style.setProperty("--secondary-background-light", "#fcfcfc");
        r.style.setProperty("--tertiary-background", "#e6e6e6");
        r.style.setProperty("--shadow", "#999999");
        r.style.setProperty("--cube-top", "#33adff");
        r.style.setProperty("--cube-left", "#1aa3ff");
        r.style.setProperty("--cube-right", "#0099ff");
        r.style.setProperty("--invert-svg-filter", "invert(0)");

        //mudar o icone do tema
        document.getElementById("themeIcon").src = "assets/img/moon.svg";
    }
}
