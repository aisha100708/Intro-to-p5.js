tint_color = "";
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 260);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}
function apply_filter_tint() {
    tint_color = document.getElementById("filter_color_name").value;
}
function take_snapshot() {
    save("image.png");
}