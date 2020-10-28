<<<<<<< HEAD
export const pluginPrefix = `gatsby-source-sanity`
=======
export const pluginPrefix = 'gatsby-source-sanity'
>>>>>>> 5df5066569fd92d6ef60873a38b8c345d21d82e4

export function prefixId(id: string) {
  return `${pluginPrefix}_${id}`
}

enum ReporterLevel {
<<<<<<< HEAD
  Error = "ERROR",
=======
  Error = 'ERROR',
>>>>>>> 5df5066569fd92d6ef60873a38b8c345d21d82e4
}

enum ReporterCategory {
  // Error caused by user (typically, site misconfiguration)
<<<<<<< HEAD
  User = "USER",
  // Error caused by Sanity plugin ("third party" relative to Gatsby Cloud)
  ThirdParty = "THIRD_PARTY",
  // Error caused by Gatsby process
  System = "SYSTEM"
}


export const CODES = {
    UnsupportedGatsbyVersion: `10000`,
    SchemaFetchError: `10001`,
  }
  
  export const ERROR_MAP = {
    [CODES.UnsupportedGatsbyVersion]: {
      text: (context: any) => context.sourceMessage,
      level: ReporterLevel.Error,
      category: ReporterCategory.User,
    },
    [CODES.SchemaFetchError]: {
      text: (context: any) => context.sourceMessage,
      level: ReporterLevel.Error,
      category: ReporterCategory.ThirdParty,
    },
  }
=======
  User = 'USER',
  // Error caused by Sanity plugin ("third party" relative to Gatsby Cloud)
  ThirdParty = 'THIRD_PARTY',
  // Error caused by Gatsby process
  System = 'SYSTEM',
}

export const CODES = {
  UnsupportedGatsbyVersion: '10000',
  SchemaFetchError: '10001',
  MissingProjectId: '10002',
  MissingDataset: '10002',
}

export const ERROR_MAP = {
  [CODES.UnsupportedGatsbyVersion]: {
    text: (context: any) => context.sourceMessage,
    level: ReporterLevel.Error,
    category: ReporterCategory.User,
  },
  [CODES.SchemaFetchError]: {
    text: (context: any) => context.sourceMessage,
    level: ReporterLevel.Error,
    category: ReporterCategory.ThirdParty,
  },
  [CODES.MissingProjectId]: {
    text: (context: any) => context.sourceMessage,
    level: ReporterLevel.Error,
    category: ReporterCategory.User,
  },
  [CODES.MissingDataset]: {
    text: (context: any) => context.sourceMessage,
    level: ReporterLevel.Error,
    category: ReporterCategory.User,
  },
}
>>>>>>> 5df5066569fd92d6ef60873a38b8c345d21d82e4
