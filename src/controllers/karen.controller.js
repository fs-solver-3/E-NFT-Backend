import { Karen} from '../database/models';
import { RefreshToken } from '../database/models';

export const karenController = () => {

  const buyKaren = async (req, res, next) => {
    // const nftInfo = req.body;
    
    const header_token = req.header('authorization');
    const user_loggedin = await RefreshToken.findAll(
      {
        where: {token: header_token}
      }
    );

    if (user_loggedin !== 0){
        // const nftInfo = req.body;
        const { owner, quantity, currencytype, email, karentype } = req.body;
        try {
          const data = await Karen.create(
            {
              owner: owner,
              quantity: quantity,
              currencytype: currencytype,
              email: email,
              karentype: karentype,
            },
          );  
          if (res.status(200).json({ success: true, data })) {
            res.send(data);
          }

        } catch (err) {
          console.log(err);
        }  
    }

    else {
      res.status(404).json({success: false});
    }
  };
  
  
  return { buyKaren };
};
