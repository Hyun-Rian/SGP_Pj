const sql=require("./db.js");

const SG_Ptoilet = function(SG_Ptoilet){
    this.T_Name=SG_Ptoilet.T_Name;
    this.R_N_Address=SG_Ptoilet.R_N_Address;
    this.L_N_Address=SG_Ptoilet.L_N_Address;
	this.B_Usetype=SG_Ptoilet.B_Usetype;
    this.Management=SG_Ptoilet.Management;
    this.Phone_Num=SG_Ptoilet.Phone_Num;
    this.Data_reference_date=SG_Ptoilet.Data_reference_date;
}

SG_Ptoilet.create=(newSG_Ptoilet, result)=>{
    sql.query("INSERT INTO SG_Ptoilet SET ?", newSG_Ptoilet, (err,res)=>{
        if(err){
            console.log("error:",err);
            result(err, null);
            return;
        }

        console.log("Created SG_Ptoilet:",{T_Name:res.inseertT_name, ...newSG_Ptoilet});
        result(null,{T_Name:res.inseertT_name, ...newSG_Ptoilet});
    });
};

SG_Ptoilet.findByT_name = (SG_PtoiletT_Name, result)=>{
    sql.query('SELECT*FROM SG_Ptoilet WHERE T_Name = ?', SG_PtoiletT_Name,(err, res)=>{
        if(err){
            console.log("error:", err);
            result(err,null);
            return;
        }

        if(res.length){
            console.log("found T_Name:",res[0]);
            result(null,res[0]);
            return;
        }

        result({kind:"not_found"},null);
    });
};

SG_Ptoilet.getAll=result=>{
    sql.query('SELECT*FROM SG_Ptoilet',(err, res)=>{
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }

        console.log("T_name: ", res);
        result(null,res);
    });
};

SG_Ptoilet.updateByT_Name = (T_Name, SG_Ptoilet, result)=>{
    sql.query('UPDATE SG_Ptoilet SET R_N_Address = ?, L_N_Address = ?, B_Usetype = ?, Management = ?, Phone_Num = ?, Data_reference_date = ? WHERE T_Name = ?', 
    [SG_Ptoilet.R_N_Address, SG_Ptoilet.L_N_Address, SG_Ptoilet.B_Usetype, SG_Ptoilet.Management, SG_Ptoilet.Phone_Num, SG_Ptoilet.Data_reference_date, T_Name],(err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("update SG_Ptoilet: ",{T_Name:T_Name, ...SG_Ptoilet});
        result(null,{T_Name:T_Name, ...SG_Ptoilet});
    });
};

SG_Ptoilet.remove=(T_Name, result)=>{
    sql.query('DELETE FROM SG_Ptoilet WHERE T_Name = ?', T_Name, (err, res)=>{
        if(err){
            console.log("error: ",err);
            result(err, null);
            return;
        }

        if(res.affectedRows==0){
            result({kind:"not_found"}, null);
            return;
        }

        console.log("deleted SG_Ptoilet with T_Name: ", T_Name);
        result(null, res);
    });
};

SG_Ptoilet.removeAll=result=>{
    sql.query('DELETE FROM SG_Ptoilet', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows==0){
            result({kind:"not_found"}, null);
            return;
        }

        console.log('deleted ${res.affectedRows} SG_Ptoilet');
        result(null, res);
    });
};

module.exports=SG_Ptoilet;