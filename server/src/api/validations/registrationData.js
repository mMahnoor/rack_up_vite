const yup = require('yup');

exports.adminSchema = yup.object({
    category: yup.string().test({
        name: 'is-specific-category',
        test: (value, ctx) => {
          if (value != 'Admin') {
            return ctx.createError({ message: 'Invalid category' }); // Validation failed
          }
          return true; // Validation passed
        },
    }),
    name: yup.string().test({
        name: 'is-name',
        test: function(value, ctx) {
          // Custom name validation logic
          if (value.length < 3) {
            return ctx.createError({ message: 'Name is too short' });
          }
          return true;
        }
    }),
    email: yup.string().test({
        name: 'is-email',
        test: function(value, ctx) {
            // Custom password validation logic
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
            return ctx.createError({ message: 'Invalid email address' });
            }
            return true;
        }
    }),
    password: yup.string().test({
        name: 'password',
        test: function(value, ctx) {
            // Custom email validation logic
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#&])[a-zA-Z0-9@!#&]{6,20}$/.test(value)) {
            return ctx.createError({ message: 'Invalid password' });
            }
            return true;
        }
    }),
    phone: yup.string().test({
        name: 'is-phone',
        test: function(value, ctx) {
            // Custom email validation logic
            if (!/^(\+88)?01[3-9]\d{8}$/.test(value)) {
            return ctx.createError({ message: 'Invalid phone number' });
            }
            return true;
        }
    }),
    address: yup.string().test({
        name: 'is-email',
        test: function(value, ctx) {
            // Custom email validation logic
            if (value.length > 100) {
            return ctx.createError({ message: 'Invalid address' });
            }
            return true;
        }
    }),
});

exports.studentSchema = yup.object({
    category: yup.string().test({
        name: 'is-specific-category',
        test: (value, ctx) => {
          if (value != 'User') {
            return ctx.createError({ message: 'Invalid category' }); // Validation failed
          }
          return true; // Validation passed
        },
    }),
    role: yup.string().test({
        name: 'is-specific-role',
        test: (value, ctx) => {
          if (value != 'Student') {
            return ctx.createError({ message: 'Invalid role' }); // Validation failed
          }
          return true; // Validation passed
        },
    }),
    name: yup.string().test({
        name: 'is-name',
        test: function(value, ctx) {
          // Custom name validation logic
          if (value.length < 3) {
            return ctx.createError({ message: 'Name is too short' });
          }
          return true;
        }
    }),
    email: yup.string().test({
        name: 'is-email',
        test: function(value, ctx) {
            // Custom password validation logic
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
                return ctx.createError({ message: 'Invalid email address' });
            }
            return true;
        }
    }),
    student_id: yup.string().test({
        name: 'id',
        test: function(value, ctx){
            if(!/^[0-9]{8,20}$/) return ctx.createError({message: "Invalid Id"});
            return true;
        }
    }),
    password: yup.string().test({
        name: 'password',
        test: function(value, ctx) {
            // Custom email validation logic
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#&])[a-zA-Z0-9@!#&]{6,20}$/.test(value)) {
                return ctx.createError({ message: 'Invalid password' });
            }
            return true;
        }
    }),
    phone: yup.string().test({
        name: 'is-phone',
        test: function(value, ctx) {
            // Custom email validation logic
            if (!/^(\+88)?01[3-9]\d{8}$/.test(value)) {
            return ctx.createError({ message: 'Invalid phone number' });
            }
            return true;
        }
    }),
    institute: yup.string().test({
        name: 'institute',
        test: function(value, ctx) {
          // Custom name validation logic
          if (value.length < 3) {
            return ctx.createError({ message: 'Space not valid' });
          }
          return true;
        }
    })
});

exports.supervisorSchema = yup.object({
    category: yup.string().test({
        name: 'is-specific-category',
        test: (value, ctx) => {
          if (value != 'User') {
            return ctx.createError({ message: 'Invalid category' }); // Validation failed
          }
          return true; // Validation passed
        },
    }),
    role: yup.string().test({
        name: 'is-specific-role',
        test: (value, ctx) => {
          if (value != 'Supervisor') {
            return ctx.createError({ message: 'Invalid role' }); // Validation failed
          }
          return true; // Validation passed
        },
    }),
    name: yup.string().test({
        name: 'is-name',
        test: function(value, ctx) {
          // Custom name validation logic
          if (value.length < 3) {
            return ctx.createError({ message: 'Name is too short' });
          }
          return true;
        }
    }),
    email: yup.string().test({
        name: 'is-email',
        test: function(value, ctx) {
            // Custom password validation logic
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
                return ctx.createError({ message: 'Invalid email address' });
            }
            return true;
        }
    }),
    password: yup.string().test({
        name: 'password',
        test: function(value, ctx) {
            // Custom email validation logic
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#&])[a-zA-Z0-9@!#&]{6,20}$/.test(value)) {
                return ctx.createError({ message: 'Invalid password' });
            }
            return true;
        }
    }),
    phone: yup.string().test({
        name: 'is-phone',
        test: function(value, ctx) {
            // Custom email validation logic
            if (!/^(\+88)?01[3-9]\d{8}$/.test(value)) {
                return ctx.createError({ message: 'Invalid phone number' });
            }
            return true;
        }
    }),
    institute: yup.string().test({
        name: 'institute',
        test: function(value, ctx) {
          // Custom name validation logic
          if (value.length < 3) {
            return ctx.createError({ message: 'Space Name not valid' });
          }
          return true;
        }
    })
});