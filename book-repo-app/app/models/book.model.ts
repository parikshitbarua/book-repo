export const Books = (sequelize: any, Sequelize: any) => {
    return sequelize.define("book", {
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        publishedYear: {
            type: Sequelize.STRING
        }
    });
}