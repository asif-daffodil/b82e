class jahidClass {
    name = "Jahid Hasan";
    age = 23;
    job = "student";

    jahidPatoyari(params) {
        return "Jahid Patoyari";
    }

}

var jahid = new jahidClass;

jahid.name = "Jahidul Islam Patoyari";
console.log(jahid.name);

console.log(jahid.jahidPatoyari());