const obj1 = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in obj1) {
    console.log(`${key} shortcut is for ${obj1[key]}`);
}