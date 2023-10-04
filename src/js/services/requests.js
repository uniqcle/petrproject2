const postData = async (url, data) => {


    const port = 'http://localhost:8000/' + url;

    console.log(port);

    let res = await fetch(port, {
        method: 'POST',
        body: data
    })

    return await res.text();
}

export { postData }