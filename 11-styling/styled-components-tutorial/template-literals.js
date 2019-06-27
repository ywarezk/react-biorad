// template tag literals

function a() {

}

a(['hello ', ' world ', ' foo bar '], 0.5, true, []);

// a`hello ${Math.random()} world ${true} foo bar ${[]}`

// a([], ...);