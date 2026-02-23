(async ()=>{
  try {
    for (const host of ['http://127.0.0.1:3000', 'http://localhost:3000']) {
      try {
        const res = await fetch(`${host}/api/verification-code`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: '123456' }),
        });
        const text = await res.text();
        console.log(`${host} -> Status:`, res.status);
        console.log(`${host} -> Body:`, text);
      } catch (innerErr) {
        console.error(`${host} -> Request error:`, innerErr.message || innerErr);
      }
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
})();
