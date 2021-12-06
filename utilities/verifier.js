const verifyName = (name) => {
  if (typeof name !== 'string' || name.length < 5) {
    return {
      err: {  
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
    }; 
  }
};

const verifyQuantity = (quantity) => {
  if (typeof (quantity) !== 'number') {
    return {
      err: {
        code: 'invalid_data',
        message: '"quantity" must be a number',
      },
    };
  }
  
  if (quantity <= 0) {
    return {
      err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
      },
    };
  }
};

module.exports = { verifyName, verifyQuantity };
