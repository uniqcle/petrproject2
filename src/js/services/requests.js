const postData = async (url, data) => {


    const port = 'http://localhost:8000/' + url;

    console.log(port);

    let res = await fetch(port, {
        method: 'POST',
        body: data
    })

    return await res.text();
}


const getData = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
}


export { postData, getData }