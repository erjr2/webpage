(function () {
  let current = 0;
  let data;
  let tbody;
  let pages;
  const tableHeadings = ["Name", "Watchers", "Visibility", "Issues"];
  const keys = ["name", "watchers", "visibility", "issues"];
  const next = document.getElementById("_jsNextButton");
  const prev = document.getElementById("_jsPrevButton");
  const tableContainer = document.getElementById("_jsTableContainer");
  const nextClicked = (e) => {
    console.log(current);
    console.log(pages);
    if (current < pages) {
      checkData();
    }
  };
  const prevClicked = (e) => {
    if (current > 0) {
      console.log(data[--current]);
    }
  };
  next.addEventListener("click", (e) => nextClicked(e));
  prev.addEventListener("click", (e) => prevClicked(e));

  fetch(
    "https://api.github.com/search/repositories?q=language:javascript&amp;sort=stars&amp;order=desc&amp;per_page=100"
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => stripData(data.items))
    .then((stripped) => splitToChunks(stripped, 20))
    .then((data) => dataFetched(data));

  const dataFetched = (data) => {
    data = data;
    pages = data.length;
    setData(data[current]);
  };

  const checkData = () => {
    console.log(data);
  };

  const stripData = (data) => {
    return data.map((data) => {
      return {
        name: data.name,
        watchers: data.wacthers,
        visibility: data.visibility,
        issues: data.open_issues,
      };
    });
  };

  const splitToChunks = (data, chunkSize = 20) => {
    return data.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(item);

      return acc;
    }, []);
  };

  const createElement = (type, text = "") => {
    const elmn = document.createElement(type);
    elmn.innerHTML = text;
    return elmn;
  };

  const initTable = () => {
    const table = createElement("table", "");
    const thead = createElement("thead", "");
    tbody = createElement("tbody", "");
    const tr = createElement("tr", "");
    tableHeadings.forEach((heading) => {
      tr.append(createElement("th", heading));
    });
    thead.append(tr);
    table.append(thead);
    table.append(tbody);
    tableContainer.append(table);
  };

  initTable();

  const createTableRow = (row) => {
    const tr = createElement("tr", "");
    keys.forEach((k) => {
      tr.append(createElement("td", row[k]));
    });
    return tr;
  };

  const setData = (data) => {
    tbody.innerHtml = "";
    data.forEach((row) => {
      tbody.append(createTableRow(row));
    });
  };
})();
