async function loop() {
    for (i = 1; i < 17; i++) {
        await getEle(i);
    }
}
loop();

async function getEle(id) {
    const data = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const info = await data.json();
    const finalData = info.result;
    console.log(finalData);
    const detail = document.createElement("div");
    detail.setAttribute("class", "detail");
    let htmlContent = `
<h2>Name :${finalData.properties.name}</h2>
<p><b>Height :</b>${finalData.properties.height}</p>
<p><b>Mass :</b>${finalData.properties.mass}</p>
<p><b>Eye Color :</b>${finalData.properties.eye_color}</p>
<p><b>Gender :</b>${finalData.properties.gender}</p>
<p><b>Birth Year :</b>${finalData.properties.birth_year}</p>
`;
    detail.innerHTML = htmlContent;
    const container = document.getElementById("container");
    container.append(detail);
}
