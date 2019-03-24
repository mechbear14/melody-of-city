let lead1 = new Tone.Synth().toMaster();
let lead2 = new Tone.Synth().toMaster();
let tenor_p = new Tone.Synth().toMaster();
let tenor_n = new Tone.Synth().toMaster();
let bass_p = new Tone.Synth().toMaster();
let bass_n = new Tone.Synth().toMaster();

lead1.volume.value = 0;
lead2.volume.value = 0;
tenor_n.volume.value = -100;
tenor_p.volume.value = -100;
bass_n.volume.value = -100;
bass_p.volume.value = -100;

let leadLoop = new Tone.Loop(time => {
  lead1.triggerAttackRelease("C4", "4n", time);
  lead2.triggerAttackRelease("E4", "4n", time);
}, "2n");

let tenor_pLoop = new Tone.Loop(time => {
  tenor_p.triggerAttackRelease("G4", "4n", time);
  tenor_p.triggerAttackRelease("G4", "4n", time + Tone.Time("2n"));
  tenor_p.triggerAttackRelease("A4", "4n", time + Tone.Time("2n") * 2);
  tenor_p.triggerAttackRelease("A4", "4n", time + Tone.Time("2n") * 3);
  tenor_p.triggerAttackRelease("A4", "4n", time + Tone.Time("2n") * 4);
  tenor_p.triggerAttackRelease("A4", "4n", time + Tone.Time("2n") * 5);
  tenor_p.triggerAttackRelease("C5", "4n", time + Tone.Time("2n") * 6);
  tenor_p.triggerAttackRelease("B4", "4n", time + Tone.Time("2n") * 7);
}, Tone.Time("2n") * 8);

let tenor_nLoop = new Tone.Loop(time => {
  tenor_n.triggerAttackRelease("F#4", "4n", time);
  tenor_n.triggerAttackRelease("F#4", "4n", time + Tone.Time("2n"));
  tenor_n.triggerAttackRelease("F4", "4n", time + Tone.Time("2n") * 2);
  tenor_n.triggerAttackRelease("F4", "4n", time + Tone.Time("2n") * 3);
  tenor_n.triggerAttackRelease("F4", "4n", time + Tone.Time("2n") * 4);
  tenor_n.triggerAttackRelease("F4", "4n", time + Tone.Time("2n") * 5);
  tenor_n.triggerAttackRelease("E4", "4n", time + Tone.Time("2n") * 6);
  tenor_n.triggerAttackRelease("E4", "4n", time + Tone.Time("2n") * 7);
}, Tone.Time("2n") * 8);

let bass_pLoop = new Tone.Loop(time => {
  bass_p.triggerAttackRelease("E3", "8n", time);
  bass_p.triggerAttackRelease("E3", "8n", time + Tone.Time("4n"));
  bass_p.triggerAttackRelease("E3", "8n", time + Tone.Time("4n") * 2);
  bass_p.triggerAttackRelease("E3", "8n", time + Tone.Time("4n") * 3);

  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 4);
  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 5);
  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 6);
  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 7);

  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 8);
  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 9);
  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 10);
  bass_p.triggerAttackRelease("F3", "8n", time + Tone.Time("4n") * 11);

  bass_p.triggerAttackRelease("G3", "8n", time + Tone.Time("4n") * 12);
  bass_p.triggerAttackRelease("G3", "8n", time + Tone.Time("4n") * 13);
  bass_p.triggerAttackRelease("G3", "8n", time + Tone.Time("4n") * 14);
  bass_p.triggerAttackRelease("G3", "8n", time + Tone.Time("4n") * 15);
}, Tone.Time("2n") * 8);

let bass_nLoop = new Tone.Loop(time => {
  bass_n.triggerAttackRelease("E3", "2n", time);
  bass_n.triggerAttackRelease("D3", "2n", time + Tone.Time("1n") * 1);
  bass_n.triggerAttackRelease("D3", "2n", time + Tone.Time("1n") * 2);
  bass_n.triggerAttackRelease("C3", "2n", time + Tone.Time("1n") * 3);
}, Tone.Time("2n") * 8);

leadLoop.start(0);
tenor_pLoop.start(0);
tenor_nLoop.start(0);
bass_pLoop.start(0);
bass_nLoop.start(0);

Tone.Transport.start();
