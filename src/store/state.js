export default {
    collapsed: false,
    themed: 'dark',
    selectedKeys: '',
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
    
}