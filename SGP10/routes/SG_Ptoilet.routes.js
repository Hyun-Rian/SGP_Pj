module.exports=app=>{
    const SG_Ptoilet=require("../controllers/SG_Ptoilet.controller.js");

    app.post("/SG_Ptoilet", SG_Ptoilet.create);
    
    app.get("/SG_Ptoilet", SG_Ptoilet.findAll);

    app.get("/SG_Ptoilet/:SG_PtoiletT_Name", SG_Ptoilet.findOne);

    app.put("/SG_Ptoilet/:SG_PtoiletT_Name", SG_Ptoilet.update);

    app.delete("/SG_Ptoilet/:SG_PtoiletT_Name", SG_Ptoilet.delete);

    app.delete("/SG_Ptoilet", SG_Ptoilet.deleteAll);
};