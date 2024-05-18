
export const isResponseOk = (response) => {
  return !(response instanceof Error);
};

const normalizeDataObject = (obj) => {
  let str = JSON.stringify(obj);

  str = str.replaceAll("_id", "id");

  const newObj = JSON.parse(str);
  const result = { ...newObj, category: newObj.categories };
  return result;
};

export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item);
  });
};

export const getData = async (url) => {
  try {
    const response = await fetch(url);
   
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
  try {
    const data = await getData(`${url}?categories.name=${category}`);
    // Применяем функцию нормализации для работы с массивом
    if (!data.length) {
      return [{
        _id: "0",
         title: "games leave chat",
          description: "our site dosn't have any games with this category yet. Don't be upset sooner or later someone add it.",
          developer: "vanger",
          image: "https://pm1.aminoapps.com/6970/2471b8384bca07a9fdcbae58fd80490713fe7f27r1-892-892v2_hq.jpg",
        users: []}]
    }
    return isResponseOk(data) ? normalizeData(data) : data;
  } catch (error) {
    return error;
  }
};

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`);
  return isResponseOk(data) ? normalizeDataObject(data) : data;
};

export const register = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status !== 200) {
      throw new Error("Ошибка регистрации!");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const authorize = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    
    });
    if (response.status !== 200) {
      throw new Error("Ошибка авторизации");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const getMe = async (url, jwt,) => {
  url += "-1"
  try {
    // Выполняем запрос
    const response = await fetch(url, {
      // Запрос выполняется методом GET
      method: "GET",
      // JWT-токен передаётся в специальном заголовке Authorization
      headers: { Authorization: `Bearer ${jwt}` },
    });
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const setJWT = (jwt) => {
  localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
  return localStorage.getItem("jwt");
};

export const removeJWT = () => {
  localStorage.removeItem("jwt");
};

export const checkIfUserVoted = (game, userId) => {
  return game.users.find((user) => user.id === userId);
};
export const vote = async (url, jwt, usersArray) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({ users: usersArray }),
    });
    if (response.status !== 200) {
      throw new Error("Ошибка голосования");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
