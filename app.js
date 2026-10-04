const $ = (id) => document.getElementById(id);
const fmt = (n, digits = 2) => Number(n).toLocaleString(undefined, { maximumFractionDigits: digits });

function calculate() {
  const bitrate = Math.max(1, Number($('bitrate').value) || 128);
  const listeners = Math.max(1, Number($('listeners').value) || 100);
  const libraryHours = Math.max(0, Number($('libraryHours').value) || 0);

  const bandwidthMbps = bitrate * listeners / 1000;
  const headroomMbps = bandwidthMbps * 1.2;
  const mbPerListenerHour = bitrate * 3600 / 8 / 1000;
  const gbPerListener30d = mbPerListenerHour * 24 * 30 / 1000;
  const totalTb30d = gbPerListener30d * listeners / 1000;
  const storageGb = bitrate * libraryHours * 3600 / 8 / 1_000_000;

  $('bandwidth').textContent = `${fmt(bandwidthMbps)} Mbps`;
  $('headroom').textContent = `${fmt(headroomMbps)} Mbps`;
  $('perListener').textContent = `${fmt(gbPerListener30d)} GB / 30d`;
  $('transfer').textContent = `${fmt(totalTb30d)} TB / 30d`;
  $('storage').textContent = `${fmt(storageGb)} GB`;
}

document.querySelectorAll('input').forEach((el) => el.addEventListener('input', calculate));
calculate();
