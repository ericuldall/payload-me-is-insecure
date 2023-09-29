import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'adminOnly',
      type: 'checkbox',
      access: {
        create: ({ req: { user: { roles = [] } } }) => {
          return roles.includes('admin');
        },
        read: ({ req: { user: { roles = [] } } }) => {
          return roles.includes('admin');
        },
        update: ({ req: { user: { roles = [] } } }) => {
          return roles.includes('admin');
        },
      }
    },
    {
      name: 'roles',
      type: 'select',
      options: ['admin', 'user'],
      hasMany: true
    }
  ],
};

export default Users;
