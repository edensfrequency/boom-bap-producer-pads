/* "Name your price" and the latest release.

   STORE_URL is the one switch: leave it empty and every amount, $0 included,
   goes straight to the GitHub download (paying isn't wired up yet). Paste a
   store's product link here (Gumroad, Sellfy, Ko-fi, ...) and any amount
   above $0 opens that page instead, with the amount added where the store
   accepts one. $0 always goes straight to the download. */
(() => {
  'use strict';

  const STORE_URL = ''; // TODO: the pay-what-you-want product link, when there is one

  const REPO = 'edensfrequency/boom-bap-producer-pads';
  const RELEASES = 'https://github.com/' + REPO + '/releases/latest';

  const form = document.getElementById('buyForm');
  if (!form) return;
  const input = document.getElementById('priceInput');
  const chips = [...form.querySelectorAll('.price-chips button')];
  const button = document.getElementById('buyButton');
  const note = document.getElementById('buyNote');
  const help = document.getElementById('priceHelp');
  let downloadUrl = RELEASES;

  const amount = () => {
    const v = parseFloat(String(input.value).replace(',', '.'));
    return Number.isFinite(v) ? v : NaN;
  };

  function refresh() {
    const v = amount();
    const valid = Number.isFinite(v) && v >= 0;
    help.classList.toggle('is-error', !valid);
    help.textContent = valid ? 'Minimum $0. Any amount gets the same download.' : 'Enter $0 or more.';
    button.disabled = !valid;
    button.textContent = !valid || v === 0 ? 'Download free' : 'Pay $' + formatAmount(v) + ' & download';
    chips.forEach((c) => c.classList.toggle('is-on', valid && Number(c.dataset.amount) === v));
  }

  function formatAmount(v) {
    return v % 1 === 0 ? String(v) : v.toFixed(2);
  }

  chips.forEach((c) => c.addEventListener('click', () => {
    input.value = c.dataset.amount;
    refresh();
  }));
  input.addEventListener('input', refresh);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = amount();
    if (!Number.isFinite(v) || v < 0) { input.focus(); return; }

    if (v > 0 && STORE_URL) {
      const url = new URL(STORE_URL);
      url.searchParams.set('price', formatAmount(v)); // stores that take a suggested price read this; others ignore it
      window.open(url.toString(), '_blank', 'noopener');
      note.textContent = 'Thank you! Checkout opened in a new tab.';
      return;
    }
    note.textContent = v > 0
      ? 'Thank you! Paying isn’t switched on yet, so the download is free for now.'
      : 'Enjoy it. Your download is starting.';
    window.location.href = downloadUrl;
  });

  refresh();

  // The latest release: its version, date, and the installer's own link and
  // size, so the button downloads directly. Falls back to the releases page.
  const fill = (attr, text) => document.querySelectorAll('[' + attr + ']').forEach((el) => { el.textContent = text; });
  fetch('https://api.github.com/repos/' + REPO + '/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((rel) => {
      if (rel.tag_name) fill('data-release-version', rel.tag_name);
      if (rel.published_at) {
        fill('data-release-date', new Date(rel.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }));
      }
      const setup = (rel.assets || []).find((a) => /setup.*\.exe$|\.exe$/i.test(a.name));
      if (setup) {
        downloadUrl = setup.browser_download_url;
        fill('data-release-size', (setup.size / 1048576).toFixed(1) + ' MB installer');
      }
    })
    .catch(() => {});
})();
