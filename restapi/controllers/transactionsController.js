import transModel from '../model/transModel.js'

const transactionsController = {}

transactionsController.deleteOne = async (req, res) =>{
    const data = await transModel.delete(req.params.id)
    res.json(data)
        
};

transactionsController.postTransaction = async (req, res)=>{
    const data = await transModel.postTransaction(req.body)
    res.json(data)
}

transactionsController.editTransaction = async (req, res)=>{
    const data = await transModel.editTransaction(req.params.id, req.body)
    res.json(data)
}

transactionsController.getAll = async (req, res) =>{
    const data = await transModel.getAll()
    res.json(data)
}

export default transactionsController