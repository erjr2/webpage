export const groupBy = (data, key, fn) => {
  return data.reduce((acc, cur) => {
    acc[fn(cur[key])] = acc[fn(cur[key])] || [];
    acc[fn(cur[key])].push(cur);
    return acc;
  }, {});
};

export const timeIt = (fn, ...args) => {
  const start = new Date.now();
  fn(...args);
  return new Date.now() - start;
};

const getTimeOfDay = (time) => {
  const hours = new Date(time).getHours();
  if (hours === 8) {
    return "morning";
  } else if (hours === 16) {
    return "midDay";
  }
  return "late";
};

export const getDailySummary = (data) => {
  const selectedTimes = [8, 16, 22];

  const filtered = data.filter((hour) => {
    return selectedTimes.includes(new Date(hour.time).getHours());
  });

  const cleaned = filtered.map((hour) => {
    return {
      time: hour.time,
      symbol: hour.data.next_6_hours?.summary.symbol_code,
    };
  });
  const ret = {};
  cleaned.forEach((obj) => (ret[getTimeOfDay(obj.time)] = obj));
  return ret;
};
