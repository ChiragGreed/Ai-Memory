import path from 'path'


export const setWildCard = async (req, res) => {

    const index = path.join(__dirname, "../", "../", "public/dist/index.html");

    res.send(index);

}