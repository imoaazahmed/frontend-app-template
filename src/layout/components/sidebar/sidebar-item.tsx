import React, { useState } from 'react';
import { Flex, IconProps, Text } from '@chakra-ui/react';

import { StatisticsIcon } from '@layout/components/sidebar/icons/statistics-icon';
import { CategoriesIcon } from '@layout/components/sidebar/icons/categories-icon';
import { ChatsIcon } from '@layout/components/sidebar/icons/chats-icon';
import { ElkasoUsersIcon } from '@layout/components/sidebar/icons/elkaso-users-icon';
import { InvitationsIcon } from '@layout/components/sidebar/icons/invitations-icon';
import { OrdersIcons } from '@layout/components/sidebar/icons/orders-icons';
import { OtpIcon } from '@layout/components/sidebar/icons/otp-icon';
import { PreferencesIcon } from '@layout/components/sidebar/icons/preferences-icon';
import { PromotionsIcon } from '@layout/components/sidebar/icons/promotions-icon';
import { RestaurantsIcons } from '@layout/components/sidebar/icons/restaurants-icons';
import { SuppliersIcon } from '@layout/components/sidebar/icons/suppliers-icon';
import { SupportChatsIcon } from '@layout/components/sidebar/icons/support-chats-icon';
import { UnitsIcon } from '@layout/components/sidebar/icons/units-icon';
import { UserManagementIcon } from '@layout/components/sidebar/icons/user-management-icon';
import { WhatsAppIcon } from '@layout/components/sidebar/icons/whatsApp-icon';
import { CountiesIcon } from '@layout/components/sidebar/icons/counties-icon';
import { TSidebarItem } from '@layout/components/sidebar/utils/sidebar-items';

interface IItemIcon extends IconProps {
  name: string;
}

const ItemIcon = ({ name, ...rest }: IItemIcon) => {
  switch (name) {
    case 'statistics':
      return <StatisticsIcon {...rest} />;
    case 'restaurants':
      return <RestaurantsIcons {...rest} />;
    case 'suppliers':
      return <SuppliersIcon {...rest} />;
    case 'promotions':
      return <PromotionsIcon {...rest} />;
    case 'elkasoUsers':
      return <ElkasoUsersIcon {...rest} />;
    case 'invitationRequests':
      return <InvitationsIcon {...rest} />;
    case 'orders':
      return <OrdersIcons {...rest} />;
    case 'chats':
      return <ChatsIcon {...rest} />;
    case 'categories':
      return <CategoriesIcon {...rest} />;
    case 'units':
      return <UnitsIcon {...rest} />;
    case 'userManagement':
      return <UserManagementIcon {...rest} />;
    case 'support.chats':
      return <SupportChatsIcon {...rest} />;
    case 'permissions':
      return <PreferencesIcon {...rest} />;
    case 'otp':
      return <OtpIcon {...rest} />;
    case 'whatsNumbers':
      return <WhatsAppIcon {...rest} />;
    case 'countries':
      return <CountiesIcon {...rest} />;

    default:
      return <></>;
  }
};

interface ISidebarItem {
  item: TSidebarItem;
}

export const SidebarItem = ({ item }: ISidebarItem) => {
  const [isActive] = useState(false);

  return (
    <Flex
      p={'sm'}
      align={'center'}
      borderRadius='base'
      bgColor={isActive ? 'brand.500' : 'white'}
      _hover={{ bgColor: isActive ? 'brand.500' : 'gray.100' }}
      _active={{ bgColor: isActive ? 'brand.500' : 'gray.200' }}
    >
      <ItemIcon name={item.name} marginEnd={'md'} fill={isActive ? 'white' : 'gray.500'} />
      <Text color={isActive ? 'white' : 'gray.500'} fontSize='md' fontWeight='medium' textTransform={'capitalize'}>
        {item.name}
      </Text>
    </Flex>
  );
};
