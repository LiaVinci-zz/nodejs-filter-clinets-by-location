exports.validate = (customer) => {
    if (!customer)
      throw new Error("Oh oh customer must exist!")

    if (!customer.name)
      throw new Error(`Customer name is missing :( ${customer}`)

    if (!customer.user_id || isNaN(customer.user_id))
      throw new Error(`Customer identifier is missing... ${customer}`)

    if (customer.latitude === null || customer.longitude === null || isNaN(customer.latitude) || isNaN(customer.longitude))
      throw new Error(`Could not find customer location, help me find him ${customer}`)

    return customer
}
