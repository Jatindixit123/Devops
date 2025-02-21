exports.getAddNewStudent = (req, res) => {
    res.render('studentData', {
        pageTitle: "Added New Student",
        path: "/admin/studentOperations"
    })
}
