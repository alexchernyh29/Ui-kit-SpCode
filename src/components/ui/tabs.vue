<template>
	<div class="wrapper">
        <div class="tabs">
            <div class="tab">
                <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch">
                <label for="tab-1" class="tab-label">Tab One</label>
                <div class="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div class="tab">
                <input type="radio" name="css-tabs" id="tab-2" class="tab-switch">
                <label for="tab-2" class="tab-label">Tab Two</label>
                <div class="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div class="tab">
                <input type="radio" name="css-tabs" id="tab-3" class="tab-switch">
                <label for="tab-3" class="tab-label">Tab Three</label>
                <div class="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
    </div>
</template>
<script setup>
	const props = defineProps({
		text: {
			default: "Button",
			type: String
		},
        href: {
			default: "/",
			type: String
		},
		cssClass: {
			default: "buttons",
		}
    })
</script>
<style scoped>
.wrapper {
    width: 100%;
    margin: 0 auto;
}
.tabs {
    position: relative;
    background: #3E69FF;
    height: 250px;
}
.tabs::before,
.tabs::after {
    content: "";
    display: table;
}
.tabs::after {
    clear: both;
}
.tab {
    float: left;
}
.tab-switch {
    display: none;
}
.tab-label {
    position: relative;
    display: block;
    line-height: 40px;
    height: 45px;
    padding: 0 24px;
    background: #3E69FF;
    border-right: 2px solid #3E69FF;
    color: #fff;
    cursor: pointer;
    top: 0;
    transition: all 0.25s;
}
.tab-label:hover {
    top: -4px;
    transition: top 0.25s;
}
.tab-content {
    max-height: 200px;
    overflow: auto;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 42px;
    left: 0;
    padding: 25px;
    background: #fff;
    color: #2c3e50;
    border-bottom: 4px solid #bdc3c7;
    opacity: 0;
    transition: all 0.35s;
}
.tab-switch:checked + .tab-label {
    background: #fff;
    color: #2c3e50;
    border-bottom: 0;
    border-right: 2px solid #fff;
    transition: all 0.35s;
    z-index: 1;
    top: -1px;
}
.tab-switch:checked + label + .tab-content {
    z-index: 2;
    opacity: 1;
    transition: all 0.35s;
}
</style>