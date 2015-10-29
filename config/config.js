'use strict';

module.exports = {
	SECRET: process.env.SECRET || 'qisn0d9knsilghsynqm882ais1ms5',
	PORT: process.env.PORT || 9090,
	JWT_EXPIRATION: process.env.JWT_EXPIRATION ||  1440,
	MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/adra',
	ENV: process.env.NODE_ENV || 'development'
}