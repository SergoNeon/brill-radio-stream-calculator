# BRILL Radio Stream Calculator

Open-source, zero-dependency browser calculator for estimating bandwidth, monthly transfer and library storage for internet-radio streams.

It is useful when planning Icecast/Shoutcast-style audio delivery, sizing network capacity, comparing bitrates, or estimating how much storage an encoded library will use.

## Calculations

For a bitrate `b` in kbps and `n` concurrent listeners:

- stream bandwidth (Mbps): `(b × n) / 1000`
- recommended bandwidth with 20% headroom: `bandwidth × 1.2`
- transfer per listener per hour (MB): `b × 3600 / 8 / 1000`
- 30-day transfer (GB): `hourly_MB × 24 × 30 / 1000`
- encoded audio storage (GB): `bitrate_kbps × seconds / 8 / 1,000,000`

The tool intentionally uses decimal network units so the assumptions are explicit and reproducible.

## Use

Open `index.html` locally, or use the hosted version on GitHub Pages.

## Related open data

- [BRILL RADIO Internet Radio Benchmarks 2026](https://radio.brill.city/internet-radio-benchmarks-2026/)
- [Research hub](https://radio.brill.city/research/)
- [CSV/JSON reference dataset](https://github.com/SergoNeon/brill-radio-research)

## License

MIT
