const v1e = document.getElementById("v1");
const v2e = document.getElementById("v2");
const v3e = document.getElementById("v3");
const v4e = document.getElementById("v4");

let v1,
  v2,
  v3,
  v4 = 0;

let m1 = new Tone.Synth().toMaster();
let m2 = new Tone.Synth().toMaster();

v1e.addEventListener("input", ev => {
  console.log(ev.target.value);
  v1 = 10 * Math.log2(ev.target.value / 100);
  m1.volume.value = v1;
});

v2e.addEventListener("input", ev => {
  console.log(ev.target.value);
  v2 = 10 * Math.log2(ev.target.value / 100);
  m2.volume.value = v2;
});

v3e.addEventListener("input", ev => {
  console.log(ev.target.value);
  v3 = 10 * Math.log2(ev.target.value / 100);
});

v4e.addEventListener("input", ev => {
  console.log(ev.target.value);
  v4 = 10 * Math.log2(ev.target.value / 100);
});

//m1.triggerAttackRelease("C4", "4n");
//m1.triggerAttackRelease("D4", "4n");
//m2.triggerAttackRelease("E4", "4n");
/*
m1.triggerAttackRelease("E4", "4n");
m1.triggerAttackRelease("F4", "4n");
m1.triggerAttackRelease("E4", "4n");
m1.triggerAttackRelease("F4", "4n");
m1.triggerAttackRelease("G4", "4n");
m1.triggerAttackRelease("F4", "1n");
m1.triggerAttackRelease("F4", "2n");
m1.triggerAttackRelease("E4", "1n");
*/

var loop = new Tone.Loop(function(time) {
  m1.triggerAttackRelease("C4", "4n", time);
  m2.triggerAttackRelease("G4", "4n", time);
}, "2n");

loop.start(0);
Tone.Transport.start();
