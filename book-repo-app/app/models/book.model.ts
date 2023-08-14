import {validateYear} from "../utils/validateYear.utils";
export const Books = (sequelize: any, Sequelize: any) => {
    return sequelize.define("book", {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publishedYear: {
            type: Sequelize.BIGINT,
            validate: {
                customValidator(value: Number) {
                    if ( !validateYear(String(value)) ) {
                        throw new Error("Not a valid year. Enter a valid year between 1000 and 9999");
                    }
                }
            }
        }
    });
}