import { response } from 'express';
import { MarketplaceList, sequelize} from '../database/models';

export const marketplacelistController = () => {

  var sorted_data = 0;

  const marketplacelist = async (req, res, next) => {
    
    // const { seller_email, edition_num, time_remaining, price } = req.body;
    try {
        const data = await MarketplaceList.findAll();
        if (res.status(200).json({ success: true, data })) {
            res.send(data);
        }
    } catch (err) {
        console.log(err);
    }    
  };

  const marketplacelist_sort = async (req, res, next) => {
    
    const { sort, size, page } = req.body;
    const { limit, offset } = getPagenation(page, size);
    if (sort == "edit_num"){
      try {
        const data = await MarketplaceList.findAll(
          {
            limit: size,
            order: [
              [sequelize.cast(sequelize.col('edition_num'), 'BIGINT'), 'ASC']
            ]
          }
        );
        if (res.status(200).json({ success: true, data })) {
          sorted_data = data;
          res.send(data);
        }
      } catch (err) {
        console.log(err);
      }
      
    }

    if (sort == "price_low_high"){
      try {
        const data = await MarketplaceList.findAll(
          {
            limit: size,
            order: [
              [sequelize.cast(sequelize.col('price'), 'BIGINT'), 'ASC']
            ]
          }
        );
        if (res.status(200).json({ success: true, data })) {
          sorted_data = data;
          res.send(data);
        }
      } catch (err) {
        console.log(err);
      }    
    }

    if (sort == "price_high_low"){
      try {
        const data = await MarketplaceList.findAll(
          {
            limit: size,
            order: [
              [sequelize.cast(sequelize.col('price'), 'BIGINT'), 'DESC']
            ]
          }
        );
        if (res.status(200).json({ success: true, data })) {
          sorted_data = data;
        }
      } catch (err) {
        console.log(err);
      }    
    }

    if (sort == "expire"){
      try {
        const data = await MarketplaceList.findAll(
          {
            limit: size,
            order: [
              [sequelize.cast(sequelize.col('expire_date'), 'BIGINT'), 'ASC']
            ]
          }
        );
        if (res.status(200).json({ success: true, data })) {
          sorted_data = data;
        }
      } catch (err) {
        console.log(err);
      }    
    }

  };

  const marketplacelist_crypto = async (req, res, next) => {
    res.status(200).json({success: true});
  };

  // Pagination
  const marketplacelist_visa = async (req, res, next) => {
    res.status(200).json({success: true});
  };

  const getPagenation = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  }

  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: lists } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { success: true, totalItems, lists, totalPages, currentPage};
  }

  const findAllCurrentPage = async (req, res, next) => {
    const { page, size } = req.body;

    const { limit, offset } = getPagenation(page, size);

    MarketplaceList.findAndCountAll({ limit, offset })
      .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch( err => {
        res.status(500).send({
          message:
            err.message || "Some Error happened while retreving lists."
        });
      });
  };    
  return { marketplacelist, marketplacelist_sort, marketplacelist_crypto, marketplacelist_visa, findAllCurrentPage };
};
