
const getDataHome = (req, res) => {
    const data = {
        title: "Desafio Nº14",
        content: ""
    }
    return res.render(`index`, data);
}

module.exports = {
    getDataHome,
};

