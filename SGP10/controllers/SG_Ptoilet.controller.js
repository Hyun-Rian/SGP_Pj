const SG_Ptoilet=require("../models/SG_Ptoilet.model.js");

exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!"
        });
    };

    const SG_Ptoilet=newSG_Ptoilet({
        T_Name:req.body.T_Name,
        R_N_Address:req.body.R_N_Address,
        L_N_Address:req.body.L_N_Address,
	    B_Usetype:req.body.B_Usetype,
        Management:req.body.Management,
        Phone_Num:req.body.Phone_Num,
        Data_reference_date:req.body.Data_reference_date
    });

    SG_Ptoilet.create(SG_Ptoilet, (err, data)=>{
        if(err){
            res.status(500).send({
                message:
                err.message ||"Some error occured while creating the SG_Ptoilet."
            });
        };
    })
};

exports.findAll=(req, res)=>{
    SG_Ptoilet.getAll((err, data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message||"Some error occurred while retrieving SG_Ptoilet."
        });
        else res.send(data);
    });
};

exports.findOne=(req, res)=>{
    SG_Ptoilet.findByT_name(req.params.SG_PtoiletT_Name, (err, data)=>{
        if(err){
            if(err.kind==="not_Found"){
                res.status(404).send({
                    message:'not found SG_Ptoilet with T_Name ${req.params.SG_PtoiletT_Name}.'
                });
            }else{
                res.status(500).send({
                    message:"Error retrieving SG_Ptoilet with T_Name" + req.params.SG_PtoiletT_Name
                });
            }
        }   else res.send(data);
    });
};

exports.update=(req, res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!"
        });
    }

    SG_Ptoilet.updateByT_Name(
        req.params.SG_PtoiletT_Name,
        newSG_Ptoilet(req.body),
        (err, data)=>{
            if(err){
                if(err.kind ==="not_found"){
                    res.status(404).send({
                        message:'Not found SG_Ptoilet with T_Name ${req.params.SG_PtoiletT_Name}.'
                    });
                }else{
                    res.status(500).send({
                        message:"Error updating SG_Ptoilet with T_Name" + req.params.SG_PtoiletT_Name
                    });
                }
            }else res.send(data);
        }
    );
};

exports.delete=(req, res)=>{
    SG_Ptoilet.remove(req.params.SG_PtoiletT_Name,(err, data)=>{
        if(err){
            if(err.kind==="not_found"){
                res.status(404).send({
                    message:'Not found SG_Ptoilet with T_name ${req.params.SG_PtoiletT_Name}.'
                });
            }else{
                res.status(500).send({
                    message:"Could not delete SG_Ptoilet with T_Name" + req.params.SG_PtoiletT_Name
                });
            }
        }else res.send({message: 'SG_Ptoilet was deleted successfully!'});
    });
};

exports.deleteAll=(req, res)=>{
    SG_Ptoilet.removeAll((err, data)=>{
        if(err)
        res.status(500).send({
            message:
            err.message||"Some error occurred while removing all SG_Ptoilet."
        });
        else res.send({message:'All SG_Ptoilet were deleted successfully!'});
    });
};