async function processUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Filter adults
  const adults = data.filter(u => u.id >= 5);

  // Map names
  const adultNames = adults.map(u => u.name);

  // Count roles
  const roleCount = adults.reduce((acc, u) => {
    const role = u.role || "user";
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  // Update one user immutably
  const updated = adults.map(u =>
    u.id === 5 ? {...u, name: "Updated"} : u
  );

  console.log({adultNames, roleCount, updated});
}

processUsers();
