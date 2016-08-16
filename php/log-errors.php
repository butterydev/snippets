<?php

// to php system log
error_log('Error message here.', 0);

// to specific file (appeneded)
error_log('Error message here.', 3, 'file.txt');

// to email
error_log('Error message here.', 1, 'david@thatdavid.com');

// to email, with headers
error_log('Error message here.', 1, 'david@thatdavid.com', '', 'headers here');
