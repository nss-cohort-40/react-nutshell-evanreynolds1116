const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/news/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/news`).then(result => result.json())
  },
  post(newArticle) {
    return fetch(`${remoteURL}/news`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    }).then(data => data.json())
}
}