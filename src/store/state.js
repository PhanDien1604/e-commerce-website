export default {
    collapsed: false,
    themed: 'dark',
    selectedKeys: '',
    totalProducts: 10,
    disablePlus: false,
    disableMinus: false,
    visibleChangeAddress: false,
    products: {
        columns: [
            {
              title: 'Image',
              dataIndex: 'image',
              key: 'image',
              responsive: ['xl']
            },
            {
              title: 'Code',
              dataIndex: 'code',
              key: 'code',
              customFilterDropdown: true,
              onFilter: (value, record) => record.code.toString().toLowerCase().includes(value.toLowerCase()),
              onFilterDropdownVisibleChange: visible => {
                  if (visible) {
                  setTimeout(() => {
                      searchInput.value.focus();
                  }, 100);
                  }
              },
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              customFilterDropdown: true,
              onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
              onFilterDropdownVisibleChange: visible => {
                if (visible) {
                  setTimeout(() => {
                    searchInput.value.focus();
                  }, 100);
                }
              },
              sorter: (a, b) => a.name.localeCompare(b.name),
              responsive: ['xl']
            }, 
            {
              title: 'Price',
              dataIndex: 'price',
              key: 'price',
              sorter: (a, b) => a.price - b.price,
              responsive: ['xl']
            },
            {
              title: 'Amount',
              dataIndex: 'amount',
              key: 'amount',
              responsive: ['xl']
            }, 
            {
              title: 'Status',
              key: 'status',
              dataIndex: 'status',
              responsive: ['xl']
            }, 
            {
              title: 'Action',
              key: 'action',
            }
        ],
        dataSource: [],
    },
    product: {},
    cart: {
      shops: [
        {
          products: [
            {
              name: 'Tên sản phẩm',
              price: 25000000,
              amount: 4,
              checked: false
            },
            {
              name: 'Tên sản phẩm',
              price: 25000000,
              amount: 2,
              checked: false
            },
          ],
          countProduct: 0,
          checked: false
        },
        {
          products: [
            {
              name: 'Tên sản phẩm',
              price: 25000000,
              amount: 4,
              checked: false
            },
            {
              name: 'Tên sản phẩm',
              price: 25000000,
              amount: 2,
              checked: false
            },
          ],
          countProduct: 0,
          checked: false
        }
      ],
      totalProduct: 4,
      checked: false,
      countShop: 0,
      countProduct: 0
    }
}